import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

// Define the schema for form validation
const userFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  gradeLevel: z.enum(
    [
      "GRADE_1",
      "GRADE_2",
      "GRADE_3",
      "GRADE_4",
      "GRADE_5",
      "GRADE_6",
      "GRADE_7",
      "GRADE_8",
      "GRADE_9",
      "GRADE_10",
      "GRADE_11",
      "GRADE_12",
      "FRESHMAN",
      "SOPHOMORE",
      "JUNIOR",
      "SENIOR",
      "POSTGRADUATE",
      "PROFESSIONAL",
    ],
    { message: "Invalid grade level" }
  ),
  subjects: z
    .array(
      z.enum(
        [
          "MATHEMATICS",
          "CHEMISTRY",
          "BIOLOGY",
          "PHYSICS",
          "BIOCHEMISTRY",
          "ENGLISH",
          "CODING",
          "OTHER",
        ],
        { message: "Invalid subject" }
      )
    )
    .min(1, { message: "At least one subject is required" }),
  virtualClasses: z.boolean(),
  inPersonClasses: z.boolean(),
  classesPerWeek: z.coerce
    .number()
    .int()
    .positive({ message: "Must have at least one class per week" }),
  comments: z.string().optional(),
});

export const userRouter = createTRPCRouter({
  // Submit user registration form
  submitForm: publicProcedure //TODO: Change this name later
    .input(userFormSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // Create a new user info record in the database
        const user = await ctx.db.user.create({
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            phoneNumber: input.phoneNumber,
            gradeLevel: input.gradeLevel,
            subjects: input.subjects,
            virtualClasses: input.virtualClasses,
            inPersonClasses: input.inPersonClasses,
            classesPerWeek: input.classesPerWeek,
            comments: input.comments,
          },
        });

        return {
          success: true,
          message: "Registration submitted successfully",
          userId: user.id,
        };
      } catch (error) {
        console.error("Error submitting form:", error);
        return {
          success: false,
          message: "Failed to submit registration. Please try again later.",
        };
      }
    }),
});

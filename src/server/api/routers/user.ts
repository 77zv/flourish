import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

// Define the schema for form validation
const userFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  gradeLevel: z.string().min(1, "Grade level is required"),
  subjects: z.array(z.string()).min(1, "At least one subject is required"),
  virtualClasses: z.boolean(),
  inPersonClasses: z.boolean(),
  classesPerWeek: z.string().min(1, "Classes per week is required"),
  comments: z.string().optional(),
});

export const userRouter = createTRPCRouter({
  // Submit user registration form
  submitForm: publicProcedure
    .input(userFormSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // Create a new user record in the database
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

        // Here you could add code to send an email notification
        // For example: await sendEmailNotification(user);

        return {
          success: true,
          message: "Registration submitted successfully",
          userId: user.id,
        };
      } catch (error) {
        console.error("Error submitting form:", error);
        
        // Check if it's a unique constraint error (e.g., duplicate email)
        if (error.code === "P2002") {
          return {
            success: false,
            message: "An account with this email already exists",
          };
        }
        
        return {
          success: false,
          message: "Failed to submit registration. Please try again later.",
        };
      }
    }),
}); 
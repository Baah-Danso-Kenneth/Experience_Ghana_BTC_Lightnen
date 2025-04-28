import { AllExperienceProps } from "./regular";

export type ExperienceStateProps = {
    experiences: AllExperienceProps[];
    loading: boolean;
    error: string | null
}
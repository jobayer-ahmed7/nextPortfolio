import { model, models, Schema } from "mongoose";

export interface IProjectMetric {
    label: string;
    value: string;
    context?: string;
}

export interface IProjectTestimonial {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatarUrl?: string;
}

export interface IProject {
    _id?: string;
    slug: string;
    images: string[];
    title: string;
    tagline?: string;
    overview: string;
    category?: string;
    industry?: string;
    liveLink: string;
    frontendCode?: string;
    backendCode?: string;
    codeIsPublic?: boolean;
    features: string[];
    technologies: {
        frontend: string[];
        backend: string[];
        tools: string[];
    };
    isFeatured: boolean;
    displayOrder?: number;
    clientType?: string;
    budgetRange?: string;
    duration?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    metrics?: IProjectMetric[];
    testimonial?: IProjectTestimonial;
    createdAt?: Date;
    updatedAt?: Date;
}

const projectSchema = new Schema<IProject>(
    {
        images: [{ type: String,
            validate:[(v:string[]) => v.length > 0, "At least one image URL is required."]
         }],
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        title: { type: String, required: true },
        tagline: { type: String },
        category: { type: String },
        industry: { type: String },
        overview: { type: String, required: true },
        liveLink: { type: String, required: true },
        frontendCode: { type: String },
        backendCode: { type: String },
        codeIsPublic: { type: Boolean, default: false
         },
        features: [{ type: String, required: true }],
        technologies: {
            frontend: [{ type: String, required: true }],
            backend: [{ type: String, required: true }],
            tools: [{ type: String, required: true }],
        },
        isFeatured: { type: Boolean, default: false },
        displayOrder: { type: Number },
        clientType: { type: String },
        budgetRange: { type: String },
        duration: { type: String },
        challenge: { type: String },
        solution: { type: String },
        results: [{ type: String }],
        metrics: [
            {
                label: { type: String, required: true },
                value: { type: String, required: true },
                context: { type: String }
            }
        ],
        testimonial: {
            quote: { type: String },
            author: { type: String },
            role: { type: String },
            company: { type: String },
            avatarUrl: { type: String }
        }
    },
    { timestamps: true }
);

const Project = models.Project || model("Project", projectSchema);
export default Project;

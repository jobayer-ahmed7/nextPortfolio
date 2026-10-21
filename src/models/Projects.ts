import { model, models, Schema } from "mongoose";


export interface IProject {
    _id?: string;
    images: string[];
    title: string;
    shortTitle?: string;
    tagline?: string;
    category?: string;
    overview: string;
    liveLink: string;
    frontendCode: string;
    backendCode: string;
    features: string[];
    technologies: {
        frontend: string[],
        backend: string[],
        tools: string[]
    };
    isFeatured: boolean;
    clientType?: string;
    role?: string;
    duration?: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    testimonial?: {
        quote: string;
        author: string;
        role?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

const projectSchema = new Schema<IProject>(
    {
        images: [{ type: String, required: true }],
        title: { type: String, required: true, },
        shortTitle: { type: String },
        tagline: { type: String },
        category: { type: String },
        overview: { type: String, required: true },
        liveLink: { type: String, required: true},
        frontendCode: {type: String, required: true},
        backendCode: {type: String, required: true},
        features:[{ type: String, required: true }],
        technologies: {
            frontend: [{type: String, required: true}],
            backend: [{type: String, required: true}],
            tools: [{type: String, required: true}],
        },
        isFeatured: {type:Boolean},
        clientType: { type: String },
        role: { type: String },
        duration: { type: String },
        challenge: { type: String },
        solution: { type: String },
        results: [{ type: String }],
        testimonial: {
            quote: { type: String },
            author: { type: String },
            role: { type: String }
        }
    },
    { timestamps: true }
)

const Project = models.Project || model("Project", projectSchema)
export default Project;
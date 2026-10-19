import { model, models, Schema } from "mongoose";


export interface IProject {
    _id?: string;
    images: string[];
    title: string;
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
    createdAt?: Date;
    updatedAt?: Date;
}

const projectSchema = new Schema<IProject>(
    {
        images: [{ type: String, required: true }],
        title: { type: String, required: true, },
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
        isFeatured: {type:Boolean}
    },
    { timestamps: true }
)

const Project = models.Project || model("Project", projectSchema)
export default Project;
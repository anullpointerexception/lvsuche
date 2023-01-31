import { Similarity as sim } from "./similarities";

export class File {
    Name: string;
    Type: string;
    Author: string;
    Keywords: Set<string>
    SimilarFiles: sim[];
}

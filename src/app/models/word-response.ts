export interface WordMeaningResponse{
    word:string,
    meanings:Meaning[],
    availableOptions:string[];
}
interface Meaning{
    meaning:string
}

export interface WordSentenceResponse{
    word:string,
    sentences:any[],
}
export interface WordEraResponse{
    word:string,
    era:string,
    eraFullName:string,
    meaning:string,
    timeRange:string,
    citations:Citation[],
}
interface Citation{
    source:string,
    author:string,
    text:string,
    deathYear:string,
    reference:string,
}
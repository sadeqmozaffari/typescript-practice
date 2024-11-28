class LiteralSample{
    MediaFileFormat : "jpg" | "png" | "gif" = "gif";
    ScoreRate : 1 | 2 | 3 | 4 | 5 = 1;

    getFileFormat(): "mp3" | "ogg" {
        return "mp3";
    }

    createSampleType(){
        type MySampleType = "word" | "excel";
    }

    //use NameSpace items
    model:Sale.Order;
}
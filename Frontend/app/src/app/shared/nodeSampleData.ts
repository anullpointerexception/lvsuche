 interface nodeConnection {
    source: string
    target: string
 }

 const connections: nodeConnection[] = [
    {
        source: "Introduction.pdf",
        target: "Skriptum_B.pdf"
    },
    {
        source: "Selfstudy_A.py",
        target: "Skriptum_A.pdf"
    },
    {
        source: "Einführung in die AI",
        target: "Skriptum_B.pdf"
    },
    {
        source: "Introduction.pdf",
        target: "Skriptum_B.pdf"
    },    
    {
        source: "Künstliche Intelligenz",
        target: "AI_Project.py"
    },
    {
        source: "Datenbanken",
        target: "DB_App.java"
    },
    {
        source: "Computer Vision",
        target: "CV_Algorithm.cpp"
    },
    {
        source: "Künstliche Intelligenz",
        target: "Selfstudy_A.py"
    },
    {
        source: "Datenbanken",
        target: "AI_Project.py"
    },
    {
        source: "Computer Vision",
        target: "DB_App.java"
    },
    {
        source: "Einführung in die AI",
        target: "AI_Project.py"
    },
    {
        source: "Introduction.pdf",
        target: "AI_Project.py"
    },
    {
        source: "Selfstudy_A.py",
        target: "CV_Algorithm.cpp"
    }
];

export default connections
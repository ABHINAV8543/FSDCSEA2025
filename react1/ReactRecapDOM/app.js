const parent=document.getElementById('parent');
const root=ReactDOM.createRoot(parent);

export function app(){
    const student=[
        {
            Name: "Ashish",
            Department: "CSE",
            Age: 21,
            College: "ABESEC"
        },
        {
            Name: "Ankur",
            Department: "CS",
            Age: 19,
            College: "RKGIT"
        },
        {
            Name: "Harsh",
            Department: "IT",
            Age: 20,
            College: "ABESIT"
        },
    ]

    return(
        <div>
            {student.map((ele, indes)=>{
                
            })}
        </div>
    )
}
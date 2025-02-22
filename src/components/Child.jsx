export default function Child() {

    const child = {
        childName: "Ava Johnson",
        childDOB: new Date("2020-12-05"),
        attendTime: "full",
        parentName: "Liam Johnson",
        parentPhone: 1987654321,
        parentEmail: "liam.johnson@example.com"
    }



    return (
        <div className='child'>
            <p> {child.childName} |  {child.childDOB}  | {child.parentName}  | {child.parentPhone}  |  {child.parentEmail}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

// export default function Todo({task,isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// conditional randaring option-1
// export default function Todo({task,isDone}){
//    if(isDone === true){
//     return <li>Finished: {task}</li>
//    }
//    else{
//     return <li>Work on:{task}</li>
//    }
// }

// conditional randaring option--2
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Finish: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional randaring --3(turnary operator)
// export default function Todo({task,isDone}){
//     return(
//         <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
//     )
// }

// conditional randaring option--4(&&)
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone && ": Done"}</li>
//     )
// }


// conditional randaring option--5(||)
// export default function Todo({task,isDone}){
//     return(
//         <li>{task} {isDone || ": do it"}</li>
//     )
// }

// conditional randaring option-6
export default function Todo({task,isDone}){
    let listItem ;
   if(isDone){
    listItem =  <li>Finished: {task}</li>
   }
   else{
    listItem = <li>Work on:{task}</li>
   }
   return listItem ;
}
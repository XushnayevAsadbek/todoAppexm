import { useState } from "react"


export const TodoApp = () => {

    const [task, setTask] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            date: date
    }

    setTask([...task , newTask])
    console.log(newTask);
    console.log(task);
    setName('');
    setEmail('')
    setPhone('')
    setDate('')

}




return (
    <main>
        <div className="p-5 w-75 shadow m-5 rounded mx-auto">
            <h1 className="texr-success fs-4 text-center">TASK MANAGER APP</h1>
            <hr />
            <form className="form" onSubmit={(e)=>addTask(e)}>
                <label htmlFor="task_title" className="w-50 d-block mx-auto">
                    <p className="text-primary fw-bold text-uppercase">Enter task name</p>
                    <input type="text"
                        id="task_title"
                        className="form-control p-3 w-100"
                        value={name}
                        onChange={(e => setName(e.target.value))}
                    />
                </label>
                <label htmlFor="task_email" className="w-50 d-block mx-auto my-2">
                    <p className="text-primary fw-bold text-uppercase">Enter task email</p>
                    <input type="email"
                        required
                        id="task_email"
                        className="form-control p-3 w-100"
                        value={email}
                        onChange={(e => setEmail(e.target.value))}
                    />
                </label>
                <label htmlFor="task_phone" className="w-50 d-block mx-auto my-2">
                    <p className="text-primary fw-bold text-uppercase">Enter task phone</p>
                    <input type="tel"
                        required
                        id="task_phone"
                        className="form-control p-3 w-100"
                        value={phone}
                        onChange={(e => setPhone(e.target.value))}
                    />
                </label>

                <label htmlFor="task_date" className="w-50 d-block mx-auto my-2">
                    <p className="text-primary fw-bold text-uppercase">Enter task date</p>
                    <input type="date"
                        required
                        id="task_date"
                        className="form-control p-3 w-100"
                        value={date}
                        onChange={(e => setDate(e.target.value))}
                    />
                </label>
                <button type="sumbit"onChange={()=>newTask()} className="btn btn-success w-50 d-block mx-auto my-2">Add new task  </button>
            </form>
        </div>
        <div className="shadow p-5 w-75 mx-auto">

            <table className="table" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Date of admission </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody >
                    {task?.map((item)=>{
                        return(

                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.date}</td>
                        <td><button>Edit</button></td>
                        <td><button >Remove</button></td>
                    </tr>
                        )
                    }) }

                </tbody>
            </table>

        </div>
    </main>
)
}
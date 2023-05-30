

export const TodoApp =()=>{
    return(
        <main>
            <div className="p-5 w-75 shadow m-5 rounded mx-auto">
                <h1 className="texr-success fs-4 text-center">TASK MANAGER APP</h1>
                <hr />
                <form className="form">
                <label htmlFor="task_title" className="w-50 d-block mx-auto">
                <p className="text-primary fw-bold text-uppercase">Enter task title</p>
                <input type="text"
                id="task_title"
                className="form-control p-3 w-100"
                />
                </label>
                <label htmlFor="task_email" className="w-50 d-block mx-auto my-2">
                <p className="text-primary fw-bold text-uppercase">Enter task email</p>
                <input type="email"
                required
                id="task_email"
                className="form-control p-3 w-100"
                />
                </label>
                <label htmlFor="task_phone" className="w-50 d-block mx-auto my-2">
                <p className="text-primary fw-bold text-uppercase">Enter task phone</p>
                <input type="tel"
                required
                id="task_phone"
                className="form-control p-3 w-100"
                />
                </label>
                
                <label htmlFor="task_date" className="w-50 d-block mx-auto my-2">
                <p className="text-primary fw-bold text-uppercase">Enter task date</p>
                <input type="date"
                required
                id="task_date"
                className="form-control p-3 w-100"
                />
                </label>
                <button className="">Add new task  </button>
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
            <tr>
                <td>Ali</td>
                <td>ali@gmail.com</td>
                <td>+998933330333</td>
                <td>30.02.2023</td>
                <td><button>Edit</button></td>
                <td><button >Remove</button></td>
            </tr>
        </tbody>
        </table>

      </div>
        </main>
    )
}
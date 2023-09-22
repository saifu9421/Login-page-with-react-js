


const Submit = () => {
    return (
        <div className="mx-auto">

             <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-col">

          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign now!</h1>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm  ">
            <div className="card-body">
           <div>
            <div className="flex gap-10">
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif ">First name</span>
                </label>
                <input type="text" placeholder="First name" className="input btn  input-bordered" />
              </div>
               
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif ">Last name</span>
                </label>
                <input type="text" placeholder="Last name" className="input btn input-bordered " />
              </div>
            </div>



             <div className="flex gap-10">

             <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif">Email</span>
                </label>
                <input type="email" placeholder="enter email" className="input  btn   input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif ">Password</span>
                </label>
                <input type="password" placeholder="enter password" className="input btn  input-bordered" />
              </div>
             </div>

             <div className="flex gap-10">

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif ">Confirm Password</span>
                </label>
                <input type="password" placeholder="enter confiram password" className="input btn  input-bordered" />
              </div>
    
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif ">Phone number()</span>
                </label>
                <input type="number" placeholder="enter your number" className="input btn input-bordered " />
              </div>
             </div>
   </div>
            </div>
          </div>
        </div>
      </div>

        </div>
    );
};

export default Submit;
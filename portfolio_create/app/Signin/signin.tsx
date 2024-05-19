export default function Signin () {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
				<h1 className="text-5xl font-bold">Create your account</h1>
				<p className="py-6">Create an free account with Petera Dev's Group</p>
				</div>
				<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<form className="card-body">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input type="text" placeholder="name" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">First name</span>
						</label>
						<input type="text" placeholder="first name" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input type="email" placeholder="email" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input type="password" placeholder="password" className="input input-bordered" required />
						<label className="label">
							<a href="../Login" className="label-text-alt link link-hover">Have an account?</a>
						</label>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Signup</button>
					</div>
				</form>
				</div>
			</div>
		</div>
	)
}
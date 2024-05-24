export default function FormData() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Your project here</h1>
					<p className="py-6">Fill all the required boxes.</p>
				</div>
				<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input type="text" placeholder="project title" className="input input-bordered" required />
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Description</span>
							</label>
							<textarea className="textarea textarea-success" placeholder="project description" required></textarea>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Images</span>
							</label>
							<input type="file" className="file-input w-full max-w-xs" required/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-outline btn-secondary">Prev</button>
							<button className="btn btn-outline btn-accent">Next</button>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Submit all project</button>
						</div>
						<label className="label">
							<a href="#" className="label-text-alt link link-hover">Remove all form ?</a>
						</label>
					</form>
				</div>
			</div>
		</div>
	);
  }
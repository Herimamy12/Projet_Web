export default function Accueil() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row">
				<img src="/image/Untitled.jpg" className="max-w-sm rounded-lg shadow-2xl" />
				<div>
				<h1 className="text-5xl font-bold">Portfolio Create</h1>
				<p className="py-6">Please login to create your basic portfolio.</p>
				<p> Or you can view our premium offer to give you more professional portfolio choices.</p> <br />
				<button className="btn btn-primary"> <a href="../Login/">Login now</a></button>
				</div>
			</div>
		</div>
	);
  }
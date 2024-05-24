export default function AccueilUser() {
	return (
		<div className="card lg:card-side bg-base-200 shadow-xl">
			<figure><img src="image/progressive.jpg" alt="Album"/></figure>
			<div className="card-body">
				<h2 className="card-title">Welcome to our creation portfolio!</h2>
				<p>You can start creating your portfolio by clicking on create now below.</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary"><a href="../formulaireData/">Create now</a></button>
				</div>
			</div>
		</div>
	);
  }
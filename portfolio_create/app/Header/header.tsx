export default function Header() {
    return(
		<div className="navbar bg-base-200">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Petera Dev's Group</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li><a href="../">Home</a></li>
					<li>
						<details>
							<summary>
								Account
							</summary>
							<ul className="p-2 bg-base-100 rounded-t-none">
								<li><a href="../Login/">Login</a></li>
								<li><a href="../Signin/">Signup</a></li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
    )
}
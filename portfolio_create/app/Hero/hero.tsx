export default function Hero() {
	return (
		<div className="hero min-h-screen">
			<div className="fixed bottom-0 bg-black opacity-5 overflow-hidden">
				<img src='/image/prtf.webp'/>
			</div>
			<div className="hero-overlay bg-opacity-100"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
				<h1 className="mb-5 text-5xl font-bold">
					HEY, I’M CHARLES BRUYERRE <br />
					BUT YOU CAN CALL ME SHARLEE
				</h1>
				<p className="mb-5">
					I’m a graphic designer, UX/UI designer 
					& front-end web developer 
				</p>
				<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	)
}
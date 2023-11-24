export default function Host(props) {
	//display all the host's appartment informations, his name, and his picture
	const {hostName, hostPic, id} = props;
	return (
		<aside className="host-area">
			<div className="host-name">{hostName}</div>
			<div className="hostPicture">
				<img src={hostPic} alt={id} aria-label={id}/>
			</div>
		</aside>
	);
}
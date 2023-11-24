export default function Tag(props) {
	// display the appartment's tags such as : Appartement, Canal Saint Martin...
	const {tag} = props;
	return (
		<div className="tagContainer">
			<span className="tagButton">{tag}</span>
		</div>
	);
}
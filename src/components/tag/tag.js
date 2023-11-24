export default function Tag(props) {
	const {tag} = props;
	return (
		<div className="tagContainer">
			<span className="tagButton">{tag}</span>
		</div>
	);
}
function MemberCard({ name, role, image }) {
  return (
    <div className="member-details">
      <img src={image} alt={`${name}'s photo`} />
      <div className="member-detail">
        <h1>{name}</h1>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default MemberCard;

const PostContent = ({ postData = [] }) => {
  return (
    <>
      {postData.map((item) => (
        <div key={item.id}>
          <div className="">
            <p className="font-code text-quinary text-sm mb-3">
              {item.eyebrow}
            </p>
            <h2 className="font-code font-bold text-[clamp(2rem,7vw,3.25rem)] text-primary leading-[1.1] mb-5">
              {item.title}
            </h2>
            <h4 className="font-code font-bold text-[clamp(2rem,7vw,3.25rem)] text-tertiary leading-[1.1] mb-5">
              {item.subtitle}
            </h4>
          </div>
          <div className="">
            <p className="text-quaternary text-base md:text-lg leading-[1.85] mb-5">
              {item.description}
            </p>
            <p className="text-quaternary text-base md:text-lg leading-[1.85] mb-5">
              {item.highlight}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostContent;

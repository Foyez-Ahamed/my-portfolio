import education from "../../assets/images/education.png"

const Education = () => {
  return (
    <div>
      <div className="mt-10">

        <div>
          <h1 className="text-4xl font-bold">Education</h1>
          <progress
            className="progress w-[160px] prog"
            value="20"
            max="100"
          ></progress>
        </div>
        

        {/*  */}
        <div className="flex items-center gap-8 mt-6">
            <div>
                <img src={education} className="w-[60px]" alt="" />
            </div>

            <div>
                <h1 className="lg:text-xl font-bold">National University | Bangladesh</h1>
                <span>Bachelor of science - Bsc</span>
                <p>2021- Present</p>
            </div>
        </div>


      </div>
    </div>
  );
};

export default Education;

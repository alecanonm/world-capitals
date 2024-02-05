import { AnswerForm } from "@components/molecules";
import { Capital, Score } from "@components/atoms";

const GuessSection = () => {
  return (
    <section className="bg-white sm:w-[500px] w-80 h-80 px-4 rounded-md flex flex-col justify-center items-center gap-10">
      <Score />
      <Capital />
      <AnswerForm />
    </section>
  );
};

export default GuessSection;

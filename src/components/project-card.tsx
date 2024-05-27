import FolderOpenIcon from "@mui/icons-material/FolderOpen";

interface IProject {
  id: number;
  title: string;
  description: string;
}

const Card = ({ title, description }: IProject) => {
  return (
    <div className="flex flex-col w-1/4 m-4 border-solid border rounded-lg border-yellow-100 p-3">
      <div className="flex flex-row items-center">
        <FolderOpenIcon className="text-4xl text-yellow-600" />
        <a className="ml-6 text-xl">{title}</a>
      </div>
      <a className="mt-6">{description}</a>
    </div>
  );
};

export default Card;

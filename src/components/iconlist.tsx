import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { IconListProps } from '@/utils/types';


export default function IconList({list} : {list : IconListProps[]}) {
  return (
    <div className="min-w-80 border-solid border-2 border-border rounded-lg bg-card">
    {list.map((item: IconListProps , index : number) => {
        return (
            <div className="h-16 py-2 w-full flex flex-wrap items-center" key={index}>
              <div className='w-9 h-9 bg-white rounded-full text-primary flex justify-center items-center my-2 mx-4 shadow-md'><FontAwesomeIcon icon={item.icon}/></div>
              <p className='text-gray'>{item.text}</p>
              {list.length != index + 1 && <hr className="max-xl:w-full w-72 m-auto opacity-15"></hr>}
            </div>
        );
      })}
    </div>
  );
}

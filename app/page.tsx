import Image from "next/image";
import ThemeSwitch from "@/components/theme-switch";
import { generalData } from "@/data/general";
import { contentData, Qualifications } from "@/data/content";
import type { Content } from "@/data/content";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6 text-xl font-bold">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <div className="flex flex-col md:flex-row text-lg" key={index}>
              <div className="mr-8 md:max-w-[150px] w-full text-slate-400 dark:text-slate-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h4 className="font-bold">{item.title}</h4>
                {item.company ? (
                <p className="text-slate-600 dark:text-gray-400">
                  {item.company}
                </p>
                ): null}
                {item.description ? (
                <p className="text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>
                ): null}
                {item.goals ? (
                  <ul>
                    {item.goals.map((val, index)=>
                      <li className="text-slate-600 dark:text-gray-400 mt-2" key={index}>{val}</li>
                    )}
                  </ul>
                ): null }
                {item.technologies ? (
                <p className="text-slate-600 dark:text-gray-400">
                  <strong>Technologies: </strong> {item.technologies}
                </p>
                ): null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto px-6 py-5 relative min-h-screen font-light" style={{background: '#333'}}>
        <section className="flex items-center" style={{background: '#3b679be8', borderTopLeftRadius: '70px;', borderBottomLeftRadius: '70px', paddingRight: '10px'}}>
          <Image
            alt="Author"
            src={generalData.avatar}
            width={150}
            height={150}
            className="rounded-full object-cover"
            style={{border: "solid 5px #3e73b3"}}
          />
          <div className="ml-4 flex-grow">
            <h1 className="mb-0.5 font-bold text-2xl text-right text-slate-900 dark:text-slate-100">
              {generalData.name}
            </h1>
            <p className="text-slate-600 text-right dark:text-slate-300 text-sm">
              {generalData.jobTitle}
            </p>
            {generalData.website ? (
              <p className="text-sm text-right text-slate-400 dark:text-slate-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, "")
                    .replace("www.", "")}
                </a>
              </p>
            ) : null}
            <br/>
            <p className="text-sm text-right"><a href="mailto:fmanuelm2012@gmail.com">fmanuelm2012@gmail.com</a></p>
            <p className="text-sm text-right"><a href="tel:+573207680938">57 320 768-0938</a></p>
          </div>
        </section>
        <section className="my-9 text-lg">
          <div className="text-slate-600 dark:text-slate-300">
            <p className="text-justify">{generalData.about}</p>
          </div>
        </section>
        <hr style={{border: "1px solid #4b4b4b"}}></hr>
        <h3 className="mb-7 mt-7 text-xl font-bold">Summary of Qualifications</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {
            Qualifications.map((qualify, index)=> (<li className="" key={index}>{qualify}</li>))
          }
        </ul>
        <hr className="mt-7" style={{border: "1px solid #4b4b4b"}}></hr>
        {contentData.map((content, index) => {
          return <Content {...content} key={index} />;
        })}
        <hr style={{border: "1px solid #4b4b4b"}}></hr>
        <section className="my-14 text-sm">
          <h3 className="mb-6 text-xl font-bold">Contacts</h3>
          <div className="flex flex-col gap-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <div className="flex" key={index}>
                  <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-slate-900 dark:text-slate-100">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-slate-900 dark:text-slate-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="px-6 absolute left-0 bottom-6" style={{display: "none"}}>
          <ThemeSwitch />
        </div>
      </main>
    </>
  );
}

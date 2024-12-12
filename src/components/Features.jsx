import { FaGoogleScholar } from "react-icons/fa6"
import { GiHealing } from "react-icons/gi"
import { GrUserExpert } from "react-icons/gr"


function Features() {
  return (
    <>
   <div className="w-full font-[sans-serif] bg-[#c1af7e] py-12 px-4" >
  <div className="max-w-7xl mx-auto">
    <h2 className="text-white sm:text-4xl text-2xl font-bold text-center mb-16">NOS OFFRES</h2>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
      <div className="rounded-xl group p-8 text-center bg-white text-green-800">
        <FaGoogleScholar size={32} className="mb-6 inline-block" />
        <h3 className="text-xl font-semibold mb-3">Des formations Personnalisées</h3>
      </div>
      <div className="rounded-xl group p-8 text-center bg-white text-green-800">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 682.667 682.667">
          <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
              <path d="M0 512h512V0H0Z" data-original="#000000" />
            </clipPath>
          </defs>
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={40} clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
            <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
            <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
          </g>
        </svg> */}
        <GiHealing  size={32} className="mb-6 inline-block"/>
        <h3 className="text-xl font-semibold mb-3">Des Soins Haut de Gamme</h3>
      </div>
      <div className="rounded-xl group p-8 text-center bg-white text-green-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 512.001 512.001">
          <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
        </svg>
        <h3 className="text-xl font-semibold mb-3">Accompagement pour la creation d'un institut de beauté</h3>
      </div>
      <div className="rounded-xl group p-8 text-center bg-white text-green-800">
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 mb-6 inline-block" viewBox="0 0 24 24">
          <g fillRule="evenodd" clipRule="evenodd">
            <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
            <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
            <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
          </g>
        </svg> */}
        <GrUserExpert size={32} className="mb-6 inline-block"/>
        <h3 className="text-xl font-semibold mb-3">Entrainement sur des modèles réels</h3>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Features
let toolsData = [];
const aiTools = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
    const data = await res.json();
    toolsData = data.data.tools; 
    // console.log(toolsData);
    displayAiTools(toolsData.slice(0,6));
    
};

const displayAiTools = (toolsData) => {


    const cardContainer = document.getElementById("card-continar");

    cardContainer.innerHTML='';

    toolsData.forEach(tool => {
        const toolCard = document.createElement("div");
        toolCard.classList = "card card-compact bg-base-100 shadow border";

        toolCard.innerHTML = `
         <div class=" w-auto">
         <figure class=" p-5 w-auto" ><img class="rounded-lg" src="${tool?.image}" alt="" /></figure>

         <h2 class="card-title mx-5">Features</h2>
         <ul class="mx-5 mb-5">
         <ol>1.${tool?.features[0]}</ol>
         <ol>2.${tool?.features[1]}</ol>
         <ol>3.${tool?.features[2]}</ol>
     </ul>
             
         </div>
             <hr>
                <div class="card-actions mx-4 justify-between items-center my-5">
                    <div class="space-y-4">
                    <h2 class="card-title">${tool.name}</h2>
                    <p><span><i class="fa-solid fa-calendar-days mr-2"></i></span>${tool.published_in}</p>
                    </div>
                    <button onclick="showModalHandle('${tool.id}')" class="btn bg-rose-50 mx-3 py-0 rounded-full">
                        <i class="fa-solid fa-arrow-right text-red-500"></i>
                    </button>
                </div>
            
        `;

        cardContainer.appendChild(toolCard);
    });
};

// show Detels with modal
const showModalHandle = async (id) => {
    // console.log(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const data = await res.json();
    const modaldata = data.data;
    console.log(modaldata);
    showmy_modal.showModal();
    modalDataShow(modaldata);
     
     
};

const modalDataShow = (modaldata) => {
    const modalContainer = document.getElementById('modal-continer');
    modalContainer.classList = 'grid grid-cols-1 md:grid-cols-2 gap-4 m-7 '; 
    modalContainer.innerHTML = `
    <div class="bg-red-50 border py-5 rounded-lg p-5 w-auto">
    <h2 class="font-bold">${modaldata?.description}</h2>
    <ol class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-5">
    <li class="bg-base-100 p-2 text-green-600 rounded-lg text-center flex items-center font-semibold" >${modaldata?.pricing[0]?.plan} ${modaldata?.pricing[0]?.price}</li>
    <li class="bg-base-100 p-2 text-orange-500 rounded-lg text-center flex items-center font-semibold">${modaldata?.pricing[1]?.plan} ${modaldata?.pricing[1]?.price}</li>
    <li class="bg-base-100 p-2 text-rose-500 rounded-lg text-center flex items-center font-semibold">${modaldata?.pricing[2]?.plan} ${modaldata?.pricing[3]?.price}</li>
    </ol> 
    <div class="grid grid-cols-1 lg:grid-cols-2 justify-around mt-7">
        <div>
        <h3 class="text-xl font-bold my-3">Features<h3>
        <ol>
        <li class="text-xm text-gray-500">${modaldata.features[1]?.feature_name}</li>
        <li class="text-xm text-gray-500">${modaldata.features[2]?.feature_name}</li>
        <li class="text-xm text-gray-500">${modaldata.features[3]?.feature_name}</li>
        </ol>
        </div>
     
        <div>
        <h3 class="text-xl font-bold my-3">integrations<h3>
        <ol>
        <li class="text-xm text-gray-500">${modaldata?.integrations[0]}</li>
        <li class="text-xm text-gray-500">${modaldata?.integrations[2]}</li>
        <li class="text-xm text-gray-500">${modaldata?.integrations[3]}</li>
        </ol>
        </div>

    </div>

    </div>
        <div class="rounded-lg bg-base-100 border w-auto">
        <figure class=" p-5 w-full" ><img class="rounded-lg" src="${modaldata.image_link[0]}" alt="" /></figure>
        <h3 class="text-center text-xl font-bold mt-4">${modaldata?.input_output_examples[0]?.input}</h3>
        <h3 class="text-center text-base mx-6 text-gray-400 my-4 ">${modaldata?.input_output_examples[0]?.output}</h3>
        </div>
       
    `;
};
// SHOwALL

const showAll = () =>{
    const showAllBtn = document.getElementById('show-all-btn')
    showAllBtn.classList.add('hidden');
    displayAiTools(toolsData);
} 


aiTools();



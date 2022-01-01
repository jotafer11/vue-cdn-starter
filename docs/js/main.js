const One = { 
	template: `<div class="text-center mt-3">

				        <div class="form-check form-check-inline">
				          <input class="form-check-input" type="checkbox" onClick="uncheck('1','2','3','4','5');">
				          <label class="form-check-label" for="inlineCheckbox1">Set 1</label>
				        </div>

				        <div class="form-check form-check-inline">
				          <input class="form-check-input" type="checkbox" onClick="uncheck('1','2','3','4','5');">
				          <label class="form-check-label" for="inlineCheckbox2">Set 2</label>        	
				        </div>

				        <div class="form-check form-check-inline">
				          <input class="form-check-input" type="checkbox" onClick="uncheck('1','2','3','4','5');">
				          <label class="form-check-label" for="inlineCheckbox2">Set 3</label>    
				        </div>

				        <div class="form-check form-check-inline" onClick="uncheck('1','2','3','4','5');">
				          <input class="form-check-input" type="checkbox">
				          <label class="form-check-label" for="inlineCheckbox2">Set 4</label>          	
				        </div>

				      <div class="mt-3">

					        <input class="form-check-input" type="radio" id="1">
					        <label class="form-check-label" for="exampleRadios1">
					          1- Pistol Squat (6-12 reps)
					        </label>

					  </div>


					  <div>

					   		<input class="form-check-input" type="radio" id="2">
					        <label class="form-check-label" for="exampleRadios2">
					          2- Empuje de cadera
					        </label>					      	
				      	

				      </div>


				      <div>

					        <input class="form-check-input" type="radio" id="3">
					        <label class="form-check-label" for="exampleRadios3">
					          3- Curl Nordico
					        </label>							      


				      </div>

				      <div>

					        <input class="form-check-input" type="radio" id="4">
					        <label class="form-check-label" for="exampleRadios4">
					          4- Gemelos en mesa
					        </label>							      

					   </div>

				      <div>

					        <input class="form-check-input" type="radio" id="5">
					        <label class="form-check-label" for="exampleRadios5">
					          5- Subir con pesa
					        </label>							      	
				      	

				      </div>					      				      	     
				                                
				  </div>`

}
const Two = { 
	template: '<div>Two</div>' 
}

const Three = { 
	template: '<div>Three</div>'

}


const routes = [
  { path: '/', component: One },
  { path: '/two', component: Two },
  { path: '/three', component: Three }
]


const router = new VueRouter({
  routes // short for `routes: routes`
})



const app = new Vue({
  router
}).$mount('#app')



function uncheck(){
 var a=uncheck.arguments,z0=0;
 for (;z0<a.length;z0++){
  document.getElementById(a[z0])?document.getElementById(a[z0]).checked=false:null;
 }
}

<template>
      <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <div class="layout-page">
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
                <div class="col-md-6">
                  <div class="card mb-4">
                    <h5 class="card-header">Input Padrão</h5>
                    <div class="card-body">
                      <div>
                        <label for="defaultFormControlInput" class="form-label">Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="defaultFormControlInput"
                          placeholder="John Doe"
                          aria-describedby="defaultFormControlHelp"
                        />
                        <div id="defaultFormControlHelp" class="form-text">
                          We'll never share your details with anyone else.
                        </div>
                      </div>
                      <div class="mb-3 row">
                        <label for="html5-datetime-local-input" class="col-md-2 col-form-label">Datetime</label>
                        <div class="col-md-10">
                          <input
                            class="form-control"
                            type="datetime-local"
                            value="2021-06-18T12:30:00"
                            id="html5-datetime-local-input"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4">
                    <h5 class="card-header">Form Controls</h5>
                    <div class="card-body">
                      
                      <div class="mb-3">
                        <label for="exampleFormControlReadOnlyInput1" class="form-label">Read only</label>
                        <input
                          class="form-control"
                          type="text"
                          id="exampleFormControlReadOnlyInput1"
                          placeholder="Readonly input here..."
                          readonly
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlReadOnlyInputPlain1" class="form-label">Read plain</label>
                        <input
                          type="text"
                          readonly
                          class="form-control-plaintext"
                          id="exampleFormControlReadOnlyInputPlain1"
                          value="email@example.com"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlSelect1" class="form-label">Example select</label>
                        <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="exampleDataList" class="form-label">Datalist example</label>
                        <input
                          class="form-control"
                          list="datalistOptions"
                          id="exampleDataList"
                          placeholder="Type to search..."
                        />
                        <datalist id="datalistOptions">
                          <option value="San Francisco"></option>
                          <option value="New York"></option>
                          <option value="Seattle"></option>
                          <option value="Los Angeles"></option>
                          <option value="Chicago"></option>
                        </datalist>
                      </div>
                      <div>
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                      <div class="row gy-3">
                        <div class="col-md">
                          <small class="text-light fw-semibold">Checkboxes</small>
                          <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" checked />
                            <label class="form-check-label" for="defaultCheck2"> Indeterminate </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" checked />
                            <label class="form-check-label" for="defaultCheck3"> Checked </label>
                          </div>
                        </div>
                        <div class="col-md">
                          <small class="text-light fw-semibold">Radio</small>
                          <div class="form-check mt-3">
                            <input
                              name="default-radio-1"
                              class="form-check-input"
                              type="radio"
                              value=""
                              id="defaultRadio1"
                            />
                            <label class="form-check-label" for="defaultRadio1"> Unchecked </label>
                          </div>
                          <div class="form-check">
                            <input
                              name="default-radio-1"
                              class="form-check-input"
                              type="radio"
                              value=""
                              id="defaultRadio2"
                              checked
                            />
                            <label class="form-check-label" for="defaultRadio2"> Checked </label>
                          </div>
                          <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                          </div>
                          <div class="form-check form-switch mb-2">
                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                  <div class="card mb-4">
                    <h5 class="card-header">Button with dropdowns & addons</h5>
                    <div class="card-body demo-vertical-spacing demo-only-element">
                      <small class="text-light fw-semibold d-block">Button addons</small>
                      <div class="input-group">
                        <button class="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                      </div>

                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
                      </div>

                      <div class="input-group">
                        <button class="btn btn-outline-primary" type="button">Button</button>
                        <button class="btn btn-outline-primary" type="button">Button</button>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="Example text with two button addons"
                        />
                      </div>

                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Recipient's username"
                          aria-label="Recipient's username with two button addons"
                        />
                        <button class="btn btn-outline-primary" type="button">Button</button>
                        <button class="btn btn-outline-primary" type="button">Button</button>
                      </div>

                      <small class="text-light fw-semibold d-block pt-3">Button with dropdowns</small>
                      <div class="input-group">
                        <button
                          class="btn btn-outline-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                      </div>

                      <div class="input-group">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                        <button
                          class="btn btn-outline-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                      </div>

                      <div class="input-group">
                        <button
                          class="btn btn-outline-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="javascript:void(0);">Action before</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Another action before</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                        <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons" />
                        <button
                          class="btn btn-outline-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                          <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>               
      </div>
    </div>
</div>
</template>

<script>
import "@/assets/assets/vendor/fonts/boxicons.css";
import "@/assets/assets/vendor/css/core.css";
import "@/assets/assets/vendor/css/theme-default.css";
import "@/assets/assets/css/demo.css";
import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
//os arquivs js 
import "@/assets/assets/vendor/libs/jquery/jquery.js";
import "@/assets/assets/vendor/libs/popper/popper.js";
import "@/assets/assets/vendor/js/bootstrap.js";
import "@/assets/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
import "@/assets/assets/vendor/js/menu.js";
import "@/assets/assets/vendor/libs/apex-charts/apexcharts.js";

export default {

}
</script>

<style>

</style>
// Copyright
const containerDiv = document.createElement('div');
containerDiv.classList.add('container')

containerDiv.innerHTML = `
    <div class="row pt-2">
      <div class="col-12">
        <p class="text-left text-light">Copyright &copy; 2024 SE2-Group-4 | From Hanu with love
          <i class="fa-solid fa-heart"></i>
        </p>
      </div>
    </div>
`;

document.getElementById("copyright").appendChild(containerDiv);
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Carregar tarefas salvas
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["tasks"], (result) => {
    if (result.tasks) {
      result.tasks.forEach(task => addTask(task.text, task.completed));
    }
  });
});

// Função para adicionar tarefa
function addTaskFromInput() {
  const text = taskInput.value.trim();
  if (text !== "") {
    addTask(text, false);
    saveTasks();
    taskInput.value = "";
  }
}

// Adiciona tarefa ao clicar no botão
addBtn.addEventListener("click", addTaskFromInput);

// Adiciona tarefa ao pressionar Enter
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTaskFromInput();
  }
});

// Função para criar item da lista
function addTask(text, completed) {
  const li = document.createElement("li");

  // Cria label com checkbox
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  const span = document.createElement("span");
  span.textContent = text;
  if (completed) li.classList.add("completed");

  // Atualiza classe completed ao clicar no checkbox
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
    saveTasks();
  });

  label.appendChild(checkbox);
  label.appendChild(span);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(label);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
}

// Salvar tarefas no storage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(li => {
    const span = li.querySelector("span");
    const checkbox = li.querySelector("input[type=checkbox]");
    tasks.push({
      text: span.textContent,
      completed: checkbox.checked
    });
  });
  chrome.storage.sync.set({ tasks });
}
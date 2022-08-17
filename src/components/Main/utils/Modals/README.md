# MODO DE USO E CRIAÇÃO DE MODAL COMPONENTS

- Os modais são compostos por duas partes:
1. ```ModalContainer``` - elemento pai, região escura do elemento
2. ```ModalContent ``` - engloba as informações customizadas do modal.

* OBS: ````ModalContent ```` deve seguir a seguinter estrutura:

```js
  <ModalContent>
    <article>
      <h3>{tituloModal}</h3>
      <p>{mensagemModal}</p>
    </article>

    <Button textContent="example"/>
  </ModalContent>
 ```
# Cupcake Bootstrap Modal extension

An extension of the Bootstrap Modal script to prevent accidentally closing the modal when, for example, filling in a form.

To use, include the `bootstrap-modal-strict-close.js` script in your HTML and add the `data-strict-close="true"` attribute:

`<button type="button" data-toggle="modal" data-strict-close="true" data-target="#myModal" class="btn btn-primary">Launch modal</button>`

You can also do this programmatically by passing an object to the `modal()` method:

`$('#myModal').modal({ strictClose: true });`

This will disable closing the modal by clicking outside of it. It will instead only close by clicking on an element with the `data-dismiss` attribute. This typically is a *close* button.
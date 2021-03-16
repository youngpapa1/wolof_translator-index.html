<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Traducteur</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    <style>
        #input-text{
            height: 10vh;
            width: 50%;
        }
        #output-text{
            border: 1px solid black;
            height: 10vh;
            width: 50%;
        }
    </style>
</head>
<body>
    <h1>Traducteur</h1>
    <textarea id="input-text" placeholder="Enter text to be translated"></textarea>
    <br>
    <button id="btn-translate">Traduire</button>
    <div >Le resultat va s'afficher ici.</div>
    <div id="output-text"></div>
    <br>

    <button class="dropdown-item" id="rename_wbk" data-toggle="modal" data-target="#edit_modal" data-name="" data-id="">
      <div class="spaces-explorer_explorer-dropdown-item-check-and-name-container_f1uwy6ox">
        Editer
      </div>
    </button>
    <div id="radio_list">list disponible</div>

    <div class="modal fade" id="edit_modal" style="position: absolute;" data-backdrop="false">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" style="width: 90%;height: 250px;">
          <div class="modal-header">
            <h6 class="modal-title" id="edit_ModalLabel"></h6>EDITER</h6>/h6>
            <button type="button btn-sm" class="close" data-dismiss="modal" aria-hidden="true">x</button>
          </div>
          <form id="form-wbk" method="post" target="_self">
            <div class="modal-body">
                <div class="form-group">
                <input type="text" class="form-control mx-auto" id="french-text" name="french-text" placeholder="" value=""/>
                <input type="text" class="form-control mx-auto" id="wolof-text" name="wolof-text" placeholder="" value=""/>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" id="ModalCancelButton" class="btn btn-sm btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-sm btn-primary" name="select_name_wbk" id="btn-editer">Editer</button>
              <button type="button" class="btn btn-sm btn-primary" name="select_name_wbk" id="btn-save">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <script src="application.js"></script>
</body>
</html>

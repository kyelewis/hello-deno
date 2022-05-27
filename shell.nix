let
  pkgs = import (fetchTarball https://github.com/NixOS/nixpkgs/archive/master.tar.gz) {};
in pkgs.mkShell {
  buildInputs = with pkgs; [ deno ];
}

#!/usr/bin/env bash
cd $HOME/Tshake
while(true) do
rm -fr ../.telegram-cli
screen -S Tshake -X kill
screen -S Tshake ./Tshake
done

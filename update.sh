#!/usr/bin/env bash
echo "<html><body>" > index.html
for FILE in *
do
    echo '<a href="'$FILE'">'$FILE'</a><br>' >> index.html
done
echo "</body></html>" >> index.html

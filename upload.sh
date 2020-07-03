echo "<html><body>\n" > index.html
for FILE in *
do
    echo '<a href="'$FILE'">'$FILE'</a><br>\n' >> index.html
done
echo "</body></html>\n" >> index.html

git add .
git commit -m "update"
git push -u origin master

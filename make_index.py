#!/usr/bin/python3

import os

def generate_index_html():
    # Get the current directory
    current_dir = os.getcwd()
    
    # List all files in the current directory
    files = os.listdir(current_dir)
    
    # Filter out only HTML files
    html_files = [f for f in files if f.endswith('.html') and f != 'index.html']
    
    # Create the content for index.html
    content = '<!DOCTYPE html>\n<html>\n<head>\n<title>Index</title>\n</head>\n<body>\n'
    content += '<h1>Index of HTML Files</h1>\n<ul>\n'
    
    for html_file in html_files:
        content += f'<li><a href="{html_file}">{html_file}</a></li>\n'
    
    content += '</ul>\n</body>\n</html>'
    
    # Write the content to index.html
    with open('index.html', 'w') as f:
        f.write(content)
    
    print('index.html generated successfully!')

if __name__ == '__main__':
    generate_index_html()


var table_data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'} ];


function createTable() {
  document.write( '<table>');
  document.write( '<tr><th>First Name</th> <th>Last Name</th> <th>Home</th></tr>');
  for(i = 0; i < table_data.length; i++) {
  document.write('<tr><td class=first_name>' + table_data[i].first_name + '</td>' + '<td>' + table_data[i].last_name + '</td>' + '<td align=center>'+ table_data[i].home + '</td>'+'</tr>')
  };
  document.write( '</table>');
}


createTable();
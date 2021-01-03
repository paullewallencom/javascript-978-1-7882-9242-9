// You need underscore.js and a website to make this code work.
// Execute this code in the console of underscorejs.org.

const courses = [
    {
        title: 'Deep Dive into Functional in JavaScript',
        author: 'Zsolt Nagy',
        sections: 6
    },
    {
        title: 'Implementing and Testing JavaScript Applications using Functional Programming',
        author: 'Zsolt Nagy',
        sections: 5
    },
    {
        title: 'Mastering JavaScript Functional Programming Libraries',
        author: 'Zsolt Nagy',
        sections: 3
    }
];

const tableTemplate = `
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Sections</th>
        </tr>
    </thead>
    <tbody>
        <% _.each( courses, course => { %>
        <tr>
            <td><%= course.title %></td>
            <td><%= course.author %></td>
            <td><%= course.sections %></td>
        </tr>
        <% } ); %>
    </tbody>
</table>`;

document.body.innerHTML = _.template( tableTemplate )( courses );


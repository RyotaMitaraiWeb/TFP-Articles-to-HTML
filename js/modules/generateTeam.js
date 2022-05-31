export function generateTeam(input) {
    const outputArray = [];
    const team = input.split('\n\n');
    team.forEach(member => {
        if (member) {
            member = '<p>' + member.trim();
            member = member.replace(/$/gm, '<br />').replace(/ +<br \/>/gmi, '<br />') + '\n</p>';
            outputArray.push(member);
        }
    });
    const output = outputArray.join('\n\n<br />\n\n');
    return output;
}
//# sourceMappingURL=generateTeam.js.map
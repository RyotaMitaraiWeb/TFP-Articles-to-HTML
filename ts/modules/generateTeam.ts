export function generateTeam(input: string) {
    const outputArray: string[] = [];
    const team: string[] = input.split('\n\n');
    team.forEach(member => {
        if (member) {
            member = '<p>' + member.trim();
            member = member.replace(/$/gm, '<br />').replace(/ +<br \/>/gmi, '<br />') + '\n</p>';
            outputArray.push(member)
        }
    });

    const output: string = outputArray.join('\n\n<br />\n\n');
    return output;
}
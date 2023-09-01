import Link from 'next/link';
import emails from '../assests/email/data.json';

const EmailList = () => {
    return (
        <div>
            <h1>Emails</h1>
            <ul>
                {emails.map((email) => (
                    <li key={email.id}>
                        <Link href={`/emails/${email.id}`}>
                            {email.subject}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmailList;

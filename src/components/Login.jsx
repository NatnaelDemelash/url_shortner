import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import Error from "./Error";

const Login = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          to your accont if you already have one
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1 mb-2">
          <label className="font-bold text-sm">Username:</label>
          <Input name="email" type="email" placeholder="Enter your email" />
          <Error message="Please enter user name" />
        </div>
        <div className="space-y-1">
          <label className="font-bold text-sm">Password:</label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <Error message="Please enter a password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>
          {true ? <BeatLoader size={10} color="#fff" /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;

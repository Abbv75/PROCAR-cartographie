import { Stack, Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import LocaliteCouche from "./LocaliteCouche";
import Geocatalogue from "./Geocatalogue";

const CoucheDeDonnee = () => {

    return (
        <Stack
            gap={1}
            sx={{
                maxHeight: 200,
                overflowY: "scroll",
                pr: 0.5,
                mt: 1,
                "& > *": { textOverflow: "ellipsis", borderColor: "white" }
            }}
        >
            <Geocatalogue />
        </Stack>
    );
};

export default CoucheDeDonnee;
